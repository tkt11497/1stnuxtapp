export default function(context) {

    console.log("running checkauth middleware")
    context.store.dispatch('reloadauth', context.req);

}