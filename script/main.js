    


function fetchData() {
   
    let former = document.getElementById('new-film').addEventListener('submit', handleSubmit)

    function handleSubmit(e) {
        e.preventDefault()
        let filmObj ={
        id: e.target.id.value,
        title: e.target.title.value,
        runtime: e.target.runtime.value,
        capacity: e.target.capacity.value,
        showtime: e.target.showtime.value,
        tickets_sold: e.target.tickets_sold.value,
        description: e.target.description.value,    
        poster: e.target.poster.value
        
     }
     postFilm(filmObj)
    }
    function postFilm(filmObj) {
        fetch('http://localhost:3000/films',{
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(filmObj)
          
        })
        .then(res=>res.json)
        .then(films=>console.log(films))
    
    }
   
    function deleteFilm(id) {
        fetch(`http://localhost:3000/films/${id}`,{
        method: 'delete',
        headers:{
            'Content-Type': 'application/json'
        }
        
    })

}


    fetch("http://localhost:3000/films")
     .then(response => response.json())
       // handle the response
     .then(json => getData(json))
     //  requesting data from the server
     // ass
   
     function getData(films) {
           // forEach iterates through an array of names 
          films.forEach(char => {
            const main = document.getElementById("film-item");
            const p = document.createElement('p') 
            const bt = document.createElement('button') 
            bt.id =char.id
            p.addEventListener('click', ()=>{
                main.remove()

                deleteFilm(char.id)
            })
            // we have create variable p and assigne all the names in an array
            // we have created variable button and assigned all the id in an array
            p.textContent = char.title;
            p.id=char.id;
            p.addEventListener('click', displayFilmsDetails)
            //we have added an event to names and buttuns where one can view animal
            bt.textContent="view"
            main.append(p);
            bt.id=char.id;      
            p.append(bt)
     
            const bt_stylying={
           display: "block",
           color: "white",
           width: "100px",
           borderRadius: '20px',
           backgroundColor: '#444',
           height: "26px"
           }
     
     //Object.assign():
           Object.assign(bt.style, bt_stylying);
           
          
          }); 

     
     }
function displayFilmsDetails(e) {

    const id = e.target.id
    fetchFilms(id)
}

function fetchFilms(id) {
    fetch(`http://localhost:3000/films/${id}`)
    .then(response => response.json())
    .then(json=> createFilm(json))
    
}

function createFilm(films) {   
    
        const l2 =document.getElementById("film-details")
        const p1 = document.createElement('p')
        l2.innerHTML=films.title
        l2.append(p1)
        const l3 = document.getElementById("run");
        const p2 = document.createElement('p') 
        l2.innerHTML=films.title
        l3.append(p2)
        const l4 = document.getElementById("show");
        const p3 = document.createElement('p') 
        l4.innerHTML=films.showtime
        l4.append(p3)
        const l5 = document.getElementById("showtime");
        const image = document.createElement('img') 
        image.src = films.poster
        l5.append(image)

   
}


}
window.onload=fetchData