export default (app, router) => {

    router.route('/test').get(
        (req, resp) => {
            resp.send('nice job fam!')
        }
    )
}

