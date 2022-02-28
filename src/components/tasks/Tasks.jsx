import "./tasks.css";
import Task from "../task/Task";
import {Container, Navbar, Nav, ListGroup, row, Card, button} from 'react-bootstrap';
function Tasks() {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">gartner</a>
                <div class="navbar-nav nav-pills">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link active" href="#">About</a>
                    <a class="nav-link active" href="#">Work</a>
                    <a class="nav-link active" href="#">Contacts</a>
                </div>          
            </div>
        </nav> 
        <div className="container">
            <div className="welcome-row">
            <div class="card text-white bg-danger">          
                <div class="card-body">
                    Welcome!
                </div>
            </div>
            </div>
        </div>
        <div className="container"> 
        <div className="row align-items-center">
        <div className="col-8">
        <div className="info">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi! ipsum dolor sit amet, consectetur adipisicing elit. Debitis quod consectetur obcaecati ad veniam in excepturi magni quisquam illo cum.
                ipsum dolor sit amet consectetur, adipisicing elit. Nulla modi perferendis quo tenetur ratione sit unde commodi accusantium quas tempore consectetur, corrupti, expedita quasi reprehenderit.
                Quia quas voluptas illo consequatur, tenetur fugiat expedita molestias, non fuga aliquid quod provident! Magni, dolores?</p><br/>
                <p>Exercitationem hic ut consequuntur illo, eum, ex veritatis, non laborum unde sequi nobis!
                Voluptates, commodi. Ipsam cum asperiores sequi beatae voluptates ipsa, excepturi soluta commodi labore aliquam provident ea dolor numquam nesciunt repudiandae illo consequuntur dolores. Blanditiis ex libero temporibus 
                nesciunt minima sint tempora, perferendis modi sunt non voluptates voluptatem quod, molestiae architecto numquam ullam rerum neque animi esse?</p>
            </div>
        </div>
            <div className="col-4">
            <div class="note-card text-white mb-3">            
                <div class="card-body">
                    <p class="card-text">- Lorem ipsum dolor sit amet.</p>
                    <p class="card-text">- Lorem ipsum dolor sit amet consectetur.</p>
                    <p class="card-text">- Lorem ipsum dolor sit amet.</p>
                    <p class="card-text">- Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    <p class="card-text">- Lorem ipsum dolor sit amet.</p>
                    <p class="card-text">- Lorem ipsum dolor sit amet consect.</p>
                    <p class="card-text">- Lorem ipsum dolor sit amet consect.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
      </>  
    );
}

export default Tasks