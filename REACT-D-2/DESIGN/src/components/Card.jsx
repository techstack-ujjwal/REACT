

function Card({title="default",buttonText="joinNo"}){
    return (
      <div className="max-w-sm bg-amber-100 border border-gray-800 rounded-4xl mt-8 shadow overflow-hidden transition-shadow">
        <img
          className="w-full h-48 object-cover"
          src="https://picsum.photos/200"
          alt="Nature"
        />
        <div className="p-4">
          <h2 className="text-lg font-extrabold text-red-800">{title}</h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eum
            esse temporibus reiciendis. Debitis est possimus, iste, sunt, ipsum
            obcaecati cumque minima perferendis error at quidem eos excepturi
            aspernatur perspiciatis?
          </p>
         
        
        </div>
      </div>
    );
}

export default Card;
