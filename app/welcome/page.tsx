import Form from 'next/form';

export default async function Page() {
  return (
    <div className="mx-2 flex flex-col items-center justify-center text-center text-xl">
      <h1 className="mb-4 animate-pulse text-5xl font-bold">holisss</h1>
      <h2 className="mb-4 font-bold">Si querés caer a mi cumple 🎉, tenés que ganarte </h2>
      <h3 className="animate-wiggle text-3xl font-bold">
        el lugar<span className="inline-block animate-spin">😉</span>
      </h3>
      <p className="mb-5">Respondé unas preguntas sobre mí y, si le pegás a la mayoría, te ganas la invitación!</p>
      <Form action="/1">
        <input
          name="name"
          required
          placeholder="Ingresa tu nombre"
          className="border-gray mb-2 h-10 w-52 rounded border bg-white px-4 py-2 text-black hover:bg-blue-200"
        />
        <button type="submit" className="rounded bg-blue-800 px-4 py-2 font-bold text-white hover:bg-blue-950">
          Comenzar
        </button>
      </Form>
    </div>
  );
}
