class SpaceStation extends BaseModel
{
    constructor()
    {
        super('spacestations')
        this.fields = this.fields.concat(['name', 'capacity', 'needs'])
    }
}
