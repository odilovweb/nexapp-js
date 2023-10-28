import Link from "next/link";
import React from "react";
import { FaEye, FaStar, FaCodeBranch } from "react-icons/fa6";
const API = "https://api.github.com/users/odilovweb/repos";
const fetchRepos = async () => {
  const request = await fetch(API);
  const repos = await request.json();

  return repos;
};
async function page() {
  const repos = await fetchRepos();
  return (
    <div className="repos-container">
      <h1>Mirzohid's GitHub repos</h1>
      <ul className="repo-list">
        {repos &&
          repos.map((repo) => {
            return (
              <li>
                <Link href={repo.name}>
                  <h3>{repo.name}</h3>
                  <p>
                    {repo.description ? (
                      repo.description
                    ) : (
                      <span>No description the repo</span>
                    )}
                  </p>
                  <div className="repo-details">
                    <span>
                      <FaStar />
                      {repo.stargazers_count}
                    </span>
                    <span>
                      <FaCodeBranch />
                      {repo.forks_count}
                    </span>
                    <span>
                      <FaEye />
                      {repo.watchers_count}
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default page;
