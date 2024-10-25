import Form from 'next/form';

export default async function Page() {
  return (
    <div className="mx-2 flex flex-col items-center justify-center text-center text-xl">
      <h1 className="mb-4 animate-pulse text-5xl font-bold">Bienvenido</h1>
      <h2 className="mb-4 font-bold">
        Si llegaste hasta aca, significa q te estoy teniendo en cuenta para que asistas a mi kunple 🥳
      </h2>
      <p className="mb-5">Sin embargo, los lugares son</p>
      <h3 className="animate-wiggle text-3xl font-bold">limitados!!!</h3>
      <p className="mb-5">
        Por eso, creé este pequeño juego d preguntas y respuestas. El juego es simple, te hago algunas preguntas acerca
        de mi. <br />
        Si respondes correctamente la mayoria, vas a obtener la invitacion. Caso contrario, lo intentaremos el proximo
        año 😪.
      </p>
      <Form action="/1">
        <input
          name="name"
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
