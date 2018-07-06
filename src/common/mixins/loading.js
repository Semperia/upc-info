
function loading (httpRequest) {
    return {
        data: function () {
            return {
                waittingFetchNumber: 0,
                fetch: httpRequest
            }
        },
        methods: {
            showLoading () {
                this.waittingFetchNumber += 1
            },
            hiddenLoading (data) {
                this.waittingFetchNumber -= 1
            }
        },
        created () {
            console.log('绑定监听事件')
            this.fetch.addFetchListen('before', this.showLoading)
            this.fetch.addFetchListen('after', this.hiddenLoading)
        },
        beforeDestroy () {
            this.fetch.removeFetchListen('before', this.showLoading)
            this.fetch.removeFetchListen('after', this.hiddenLoading)
        }
    }
}

export default loading
