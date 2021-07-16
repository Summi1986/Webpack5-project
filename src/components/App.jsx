import '../styles/index.scss';
import { Recipes } from './Recipes';
import sword from '../images/swc-sword.png';
import swordSVG from '../images/sword.svg';

export const App = () => {
    return (
        <>
            <section className="hero">
                <main>
                    <section>
                        <h1>Oh Hai, React Again</h1>
                    </section>
                    <img src={sword} alt="sword" />
                    <img src={swordSVG} alt="swordSVG" />
                    <Recipes />
                </main>           
            </section>        
        </>
    )
}