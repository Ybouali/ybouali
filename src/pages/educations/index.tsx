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
            <div className="w-full">
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="flex flex-col items-start pb-10 gap-4">
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
