import React from "react";

class Barang extends React.Component {


  detailData = (data) =>{
    localStorage.setItem("buku",JSON.stringify(data))
    window.location.href = '/Detail';
  }
    render(){
        return(
          <div// Important for performance optimization
            className=" relative overflow-hidden mx-8 border rounded-lg shadow-lg w-56 hover:cursor-pointer"
            onClick={() => this.detailData(this.props.buku)}
            >
            {this.props.stok < 1? (
              <div className=" absolute rotate-[20deg]">
                <p className="p-2 pr-10 font-semibold text-white text-xl bg-red-300 w-60 text-right">Stok Habis</p>
              </div>
            ) : (
              <div></div>
            )}
            <img
              className=" text-center rounded-md object-contain w-full h-48 my-4"
              src={this.props.cover}
              alt="image"
            />
            <div className=" p-4">
              <h4 className=" text-lg font-light text-gray-500">{this.props.author}</h4>
              <p className=" my-2  text-xl font-bold text-black">{this.props.title}</p>
              <p className=" my-2  text-2xl font-bold text-black">{this.props.softDisc}</p>
              <p className=" my-2  text-lg font-bold text-gray-500">
                <del>{this.props.soft}</del>
              </p>
            </div>
          </div>
        )
    }
}

export default Barang;
{/* <div
            key={key} // Important for performance optimization
            className=" mx-8 border rounded-lg shadow-lg w-56 hover:cursor-pointer"
            onClick={() => detailData(book)}
          >
            <img
              className=" text-center rounded-md object-contain w-full h-48 my-4"
              src={book.cover}
              alt="image"
            />
            <div className=" p-4">
              <h4 className=" text-lg font-light text-gray-500">{book.author}</h4>
              <p className=" my-2  text-xl font-bold text-black">{book.title}</p>
              <p className=" my-2  text-2xl font-bold text-black">{book.softDisc}</p>
              <p className=" my-2  text-lg font-bold text-gray-500">
                <del>{book.soft}</del>
              </p>
            </div>
          </div> */}