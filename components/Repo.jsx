const fetchRepo = async (name) => {
  const request = await fetch(`https://api.github.com/repos/odilovweb/${name}`);
  const repos = await request.json();

  return repos;
};
async function Repo({ name }) {
  //   const repo = await fetchRepo(name);
  repo && console.log(repo);
  return (
    <>
      {repo && (
        <div className="card">
          <h2>{repo.name}</h2>
        </div>
      )}
    </>
  );
}

export default Repo;
