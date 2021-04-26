import store from '../../store';

const bellmanFord = () => {
    // placeholder for now
    const {graphValues, src, dst} = store.getState().inputObj;
    console.log(`bellmanFord received src: ${src}, dst: ${dst}, graphValues: ${JSON.stringify(graphValues)}`);;
    return;
}

export default bellmanFord;