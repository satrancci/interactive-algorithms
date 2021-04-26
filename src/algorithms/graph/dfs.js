import store from '../../store';

const dfs = () => {
    // placeholder for now
    const {graphValues, src} = store.getState().inputObj;
    console.log(`dfs received src: ${src}, graphValues: ${JSON.stringify(graphValues)}`);
    return;
}

export default dfs;