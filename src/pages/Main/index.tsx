import { CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { DeveloperInfo } from '../../components';
import TerminalInfo from './TerminalInfo';

function Main() {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-2">
            {/* Header Two icons */}
            <div className="flex flex-row justify-center items-center p-4 gap-2">
                <CodeBracketIcon className="h-12 w-12 text-blue-600 text-3xl " />
                <SparklesIcon className="h-6 w-6 text-amber-600" />
            </div>
            <DeveloperInfo
                labelOne="author"
                labelTwo="title"
                valueOne="Yassine Bouali"
                valueTwo="Full Stack Developer"
            />

            <TerminalInfo />
        </div>
    );
}

export default Main;
