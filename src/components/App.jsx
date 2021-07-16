import '../styles/index.scss';
import { Recipes } from './Recipes';

export const App = () => {
    return (
        <>
            <section className="hero">
                <main>
                    <section>
                        <h1>Oh Hai, React Again</h1>
                    </section>
                    <Recipes />
                </main>           
            </section>        
        </>
    )
}