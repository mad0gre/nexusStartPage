var collecttionOfSectionWithUrls = Backbone.Collection.extend({
    model: section,
    comparator: 'name'
})

var urlCollection = new collecttionOfSectionWithUrls()
