'use strict'

const spacestationModel = new SpaceStation() // eslint-disable-line no-undef


function initAddForm () {
  const form = window.document.querySelector('#spacestation-add-form')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const spacestationData = {}
    formData.forEach((value, key) => {
        spacestationData[key] = value
    })
    spacestationModel.Create(spacestationData)
    e.target.reset()
  })
}

function initList () {
  window.jQuery('#spacestation-list').DataTable({
    data: spacestationModel.Select(),
    columns: [
      { title: 'ID', data: 'id' },
      { title: 'Name', data: 'name' },
      { title: 'Capacity', data: 'capacity' },
      { title: 'Needs', data: 'needs' }
    ]
  })
}

function initListEvents () {
  document.addEventListener('spacestationsListDataChanged', function (e) {
    const dataTable = window.jQuery('#spacestation-list').DataTable()

    dataTable.clear()
    dataTable.rows.add(e.detail)
    dataTable.draw()
  }, false)
}

window.addEventListener('DOMContentLoaded', e => {
  initAddForm()
  initList()
  initListEvents()
})
