({
    doInit : function(component, event, helper) {
        component.set('v.columns', [
            { label: 'Station', fieldName: 'destinationDisplayName', type: 'string'},
            { label: 'Est. Time', fieldName: 'arrivalTime', type: 'string'}
        ]);
    },
    
    handleSelection : function(component, event, helper) {
        helper.updateSchedule(component, event, helper);
    }
})