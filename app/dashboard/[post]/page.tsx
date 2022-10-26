async function getPost(postNumber: string) {
  const res = await fetch(`https://dummyjson.com/posts/${postNumber}`);
  return res.json();
}

export default async function SettingsPage({ params }: any) {
  const post = await getPost(params.post);
  return <div>{JSON.stringify(post)}</div>;
}
