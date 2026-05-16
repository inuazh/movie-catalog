interface Props {
    params: Promise<{id: string}>
}


export default async function MoviePage({params}: Props) {
    const {id} = await params;
  return (
    <>
    cinema #{id}
    </>
  );
}