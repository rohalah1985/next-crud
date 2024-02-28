async function Get(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = res.json();
  return data;
}

const page = async ({ params }) => {
  const data = await Get(params.id);

  return <div>
    {data.name}
    <p>{data.email}</p>
    </div>;
};

export default page;
