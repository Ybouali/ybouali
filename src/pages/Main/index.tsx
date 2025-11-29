import { CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { DeveloperInfo, MainForScreen } from '../../components';
import TerminalInfo from './TerminalInfo';
import GridNavigation from './GridNavigation';

function Main() {
    return (
        <MainForScreen>
            <div className="w-full ">
                <div className="mx-auto     w-1/2 ">
                    <div className="flex flex-col items-center pb-12 ">
                        {/* Header - full width of the 50% */}
                        <div className="flex items-center gap-3">
                            <CodeBracketIcon className="h-12 w-12 text-blue-600" />
                            <SparklesIcon className="h-6 w-6 text-amber-600" />
                        </div>

                        {/* Now this takes the FULL width of the 50% container */}
                        <DeveloperInfo
                            labelOne="author"
                            labelTwo="title"
                            valueOne="Yassine Bouali"
                            valueTwo="Full Stack Developer"
                            className="text-start w-full"
                        />
                        <TerminalInfo />
                        <GridNavigation />
                    </div>
                </div>
            </div>
        </MainForScreen>
    );
}

export default Main;
