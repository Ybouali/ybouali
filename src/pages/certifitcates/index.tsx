import {
    CodeArrayDisplay,
    DeveloperInfo,
    ExportDefault,
    MainForScreen,
} from '../../components';
import ListCertificates from './ListCertificates';

function Certificates() {
    return (
        <MainForScreen>
            <div className="w-full">
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="flex flex-col items-start pb-10 gap-4">
                        <DeveloperInfo
                            labelOne="from"
                            labelTwo="description"
                            valueOne="certificates.tsx"
                            valueTwo="Professional certifications and achievements"
                        />
                        <CodeArrayDisplay variableName={'certificates'} />

                        <ListCertificates />

                        <span className="text-yellow-600">];</span>

                        <ExportDefault moduleName="certificates" />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default Certificates;
