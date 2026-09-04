import { DeveloperInfo, ImportDisplay, MainForScreen } from '../../components';
import ExportDefault from '../../components/Cards/ExportDefault';
import MainInfo from './MainInfo';
import TechnicalSkills from './TechnicalSkills';
import PageSeo from '../../components/PageSeo';

function WhoIAm() {
    return (
        <MainForScreen>
            <PageSeo
                title="About | Yassine Bouali"
                description="Personal bio, background, and the usual origin story — with better syntax highlighting."
                path="/about"
            />
            <div className="w-full">
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="flex flex-col items-start pb-10 gap-4">
                        <DeveloperInfo
                            labelOne="from"
                            labelTwo="description"
                            valueOne="who-i-am.tsx"
                            valueTwo="Learn more about me and my background"
                        />
                        <ImportDisplay
                            imports={['site']}
                            fromPath="./data/site.json"
                        />

                        <MainInfo />

                        <TechnicalSkills />

                        <ExportDefault moduleName="WhoIAm" />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default WhoIAm;
