import { DeveloperInfo, ImportDisplay, MainForScreen } from '../../components';
import ExportDefault from '../../components/Cards/ExportDefault';
import MainInfo from './MainInfo';
import TechnicalSkills from './TechnicalSkills';

function WhoIAm() {
    return (
        <MainForScreen>
            <div className="w-full ">
                <div className="mx-auto w-1/2 ">
                    <div className="flex flex-col items-start pb-20 gap-3 ">
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
