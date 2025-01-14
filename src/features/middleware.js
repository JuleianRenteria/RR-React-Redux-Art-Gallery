export const logger = store => next => action => {
    if (typeof action == 'functon') {
        action(store.dispatch, store.getState)
    } else {
    console.log('dispatch', store.getState())
    next(action)
    console.log('after dispatch', store.getState())
    }
}