import store from '../../store';

const bfs = () => {
    // placeholder for now
    const {graphValues, src} = store.getState().inputObj;
    console.log(`bfs received src: ${src}, graphValues: ${JSON.stringify(graphValues)}`);
    return;
}

export default bfs;