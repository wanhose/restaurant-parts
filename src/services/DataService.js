import data from '../data/diagram.json'

const DataService = {
    getFloors: () => {
        let floors = []

        Object.keys(data.floors).map((key) => {
            let floor = data.floors[key]

            floors.push(floor)
        })

        return floors
    },
    getTables: (zones) => {
        let tables = []

        Object.keys(data.tables).map((key) => {
            let table = data.tables[key]

            zones.map((zone) => zone.id_zone).indexOf(table.id_zone) > -1 ? tables.push(table) : null
        })

        return tables
    },
    getZones: (floor) => {
        let zones = []

        Object.keys(data.zones).map((key) => {
            let zone = data.zones[key]

            zone.floor === floor ? zones.push(zone) : null
        })

        return zones
    }
}

export default DataService