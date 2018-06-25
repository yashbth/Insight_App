export class Cluster{
    id:string;
    Device={};
    clusters=["Delhi","IRCTC","NISE","Guwahati"]
    Delhi=[
        "Water_Dispensing_Panel","RO_Log_Parameter"]
    IRCTC=this.Delhi
    NISE = ["NISE_Water_Dispensing_Panel","NISE_RO_Log_Parameter"]
    Guwahati =["GSCP_Water_Dispensing_Panel","GSCP_RO_Log_Parameter"]
}