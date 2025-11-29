import {
    CodeArrayDisplay,
    DeveloperInfo,
    ExportDefault,
    MainForScreen,
} from '../../components';
import ListEducations from './ListEducations';

function Educations() {
    return (
        <MainForScreen>
            <div className="w-full ">
                <div className="mx-auto w-1/2 ">
                    <div className="flex flex-col items-start pb-20 gap-3 ">
                        <DeveloperInfo
                            labelOne="from"
                            labelTwo="description"
                            valueOne="educations.tsx"
                            valueTwo="Academic background and degrees"
                        />

                        <CodeArrayDisplay variableName={'educations'} />

                        <ListEducations />

                        <span className="text-yellow-600">];</span>

                        <ExportDefault moduleName="educations" />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default Educations;
