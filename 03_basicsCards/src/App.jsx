import './App.css'
import Cards from './components/Cards'

function App() {
  // let myObj = {
  //   name : "Karbala",
  //   country : "Iraq",
  //   owner : "Imam_Hussain_a",
  //   }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>This is React using Tailwind CSS</h1>
      <Cards userName="Karbala" btnTxt= "click me" details="Inside the haram of Mola Hussian(a.s.)" img="https://images.unsplash.com/photo-1564287531351-815cc2d36011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2FyYmFsYXxlbnwwfHwwfHx8MA%3D%3D"/>
      <Cards userName="Haram Mola Abbas (a.s.)" details="A side view of the haram of Mola Abbas (a.s.)" img="https://images.unsplash.com/photo-1564287535259-91d01d9a634b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYmFsYXxlbnwwfHwwfHx8MA%3D%3D"/>
      <Cards userName="Bainul Haramain" btnTxt='press me' details="Between two Harams" img="https://images.unsplash.com/photo-1633642941406-4b8e71b4f23f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2FyYmFsYXxlbnwwfHwwfHx8MA%3D%3D"/>
    </>
  )
}

export default App
