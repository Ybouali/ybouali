import PagesNavBar from './PagesNavBar';

function Pages() {
    return (
        <main
            className="row-start-2 col-start-2 flex flex-col overflow-hidden bg-[#1e1f1f] "
            style={{
                marginLeft: '16rem',
                marginTop: '2.5rem',
                marginBottom: '2.5rem',
            }}
        >
            <PagesNavBar />
        </main>
    );
}

export default Pages;
