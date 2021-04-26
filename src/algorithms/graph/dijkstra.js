import store from '../../store';

const dijkstra = () => {
    // placeholder for now
    const {graphValues, src, dst} = store.getState().inputObj;
    console.log(`dijkstra received src: ${src}, dst: ${dst}, graphValues: ${JSON.stringify(graphValues)}`);
    return;
}

export default dijkstra;