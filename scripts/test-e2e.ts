import * as _ from 'lodash'
const exec = require('shell-utils').exec;

const android: boolean = _.includes(process.argv, '--android');
const release: boolean = _.includes(process.argv, '--release');
const skipBuild: boolean = _.includes(process.argv, '--skipBuild');
const headless: boolean = _.includes(process.argv, '--headless');
const multi: boolean = _.includes(process.argv, '--multi');

console.debug({
    android,
    release,
    skipBuild,
    headless,
    multi
})

run();

function run() {
    const prefix = android ? `android.emu` : `ios.sim`;
    const suffix = release ? `release` : `debug`;
    const configuration = `${prefix}.${suffix}`;
    const headless$ = android ? headless ? `--headless` : `` : ``;
    const workers = multi ? 3 : 1;

    if (!skipBuild) {
        exec.execSync(`detox build --configuration ${configuration}`);
    }
    exec.execSync(`detox test --configuration ${configuration} ${headless$} ${!android ? `-w ${workers}` : ``}`); //-f "ScreenStyle.test.js" --loglevel trace
}
