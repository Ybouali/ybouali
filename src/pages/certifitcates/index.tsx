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
                <div className="mx-auto w-1/2 ">
                    <div className="flex flex-col items-start pb-20 gap-3 ">
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
