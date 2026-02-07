import { DeveloperInfo, ImportDisplay, MainForScreen } from '../../components';
import ExportDefault from '../../components/Cards/ExportDefault';
import MainInfo from './MainInfo';
import TechnicalSkills from './TechnicalSkills';

function WhoIAm() {
    return (
        <MainForScreen>
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
                            imports={['Portfolio']}
                            fromPath="./developer"
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
