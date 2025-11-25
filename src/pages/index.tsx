import { PagesNavBar } from '../components';
import { useAppContext } from '../context/AppContext';
import Certificates from './certifitcates';
import ContactMe from './contactMe';
import Educations from './educations';
import Main from './Main';
import Projects from './projects';
import WhoIAm from './whoIAm';

function Pages() {
    const { pagesInNavbar } = useAppContext();

    return (
        <main
            className="row-start-2 col-start-2 flex flex-col overflow-hidden bg-[#1e1f1f] "
            style={{
                marginLeft: '16rem',
                marginTop: '2.5rem',
                marginBottom: '2rem',
            }}
        >
            <PagesNavBar />
            {pagesInNavbar.length === 0 && <Main />}

            {pagesInNavbar.length > 0 &&
                pagesInNavbar.map((p) => {
                    if (p.selected && p.page_name === 'who-am-i.tsx') {
                        return <WhoIAm key={p.page_name} />;
                    } else if (p.selected && p.page_name === 'projects.tsx') {
                        return <Projects key={p.page_name} />;
                    } else if (p.selected && p.page_name === 'education.tsx') {
                        return <Educations key={p.page_name} />;
                    } else if (
                        p.selected &&
                        p.page_name === 'certificates.tsx'
                    ) {
                        return <Certificates key={p.page_name} />;
                    } else if (p.selected && p.page_name === 'contact-me.tsx') {
                        return <ContactMe key={p.page_name} />;
                    }
                })}
        </main>
    );
}

export default Pages;
