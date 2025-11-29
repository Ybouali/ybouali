import { DeveloperInfo, ImportDisplay } from '../../components';
import MainInfo from './MainInfo';

function WhoIAm() {
    return (
        <div className="flex flex-col justify-center items-center h-full gap-2">
            <div className="w-2/3  flex flex-col items-start justify-center gap-4">
                <DeveloperInfo
                    labelOne="from"
                    labelTwo="description"
                    valueOne="who-i-am.tsx"
                    valueTwo="Learn more about me and my background"
                />
                <ImportDisplay imports={['Portfolio']} fromPath="./developer" />

                <MainInfo />
            </div>
        </div>
    );
}

export default WhoIAm;
