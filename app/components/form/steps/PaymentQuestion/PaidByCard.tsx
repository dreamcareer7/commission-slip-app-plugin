import React from '@libs/react'
import { IPaidByCardProps, IRoleData } from '../../../../models/type';
import useApp from '../../../../hooks/useApp';

const PaidByCard : React.FC<IPaidByCardProps> = ({ ui, name, range, index, note, next, getData, updateFlag }) => {
    const { Grid, TextField, InputAdornment, Box, FormControlLabel, Checkbox, RadioGroup, Radio } = ui;
    const {roleData, setRoleData} = useApp()

    const [_roleData, _setRoleData] = React.useState<IRoleData>(roleData[index]);
    const [checkedAgent, setCheckedAgent] = React.useState(false);
    const [unitType, setUnitType] = React.useState(0);    

    const [calcSelectedValue, setCalcSelectedValue] = React.useState(0);
  
    const handleSelectedChange = (e: any, key: string) => {
        updateFlag(true);
        let value = parseFloat(e.target.value);
        let updateValue = JSON.parse(JSON.stringify(_roleData));
        updateValue[key] = value;
        if(key == "payment_value" && value > 100 && updateValue.payment_unit_type == 0) return;
    
        if(key == "payment_unit_type") updateValue["payment_value"] = "";
        _setRoleData(updateValue);
    }

    const handleCheckedValue = (e: any) => {
        updateFlag(true);
        let value = e.target.checked;
        setCheckedAgent(value);
        _setRoleData({..._roleData, payment_unit_type: 0, payment_value: 0, payment_calculated_from: 0});
        
    }

    React.useEffect(() => {
        if(roleData[index].payment_value !== 0) setCheckedAgent(true);
        _setRoleData(roleData[index]);
    },[roleData]);

    React.useEffect(() => {
        if(next) {
            getData(_roleData);
        }
    }, [next]);

    return (
        <Box style={{ marginBottom: 20, marginTop: 0, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: 4, padding: 10 }}>
            <Box style={{ alignSelf:'center', textAlign:"left" }}>
                <Checkbox size='small' style={{ marginBottom: 3 }} checked={checkedAgent} onChange={handleCheckedValue}/>
                <label>{name}</label>
            </Box>
            <Grid container spacing={1} style={{ padding: 0 }}>
                <Grid item xs={5} style={{ display: 'inherit', marginRight: 10 }}>
                    <Radio
                        checked={_roleData.payment_unit_type == 0}
                        onChange={(e) => handleSelectedChange(e, "payment_unit_type")}
                        value={0}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'A' }}
                        size="small"
                        disabled={!checkedAgent}
                    />
                    <TextField
                        size='small'
                        value={_roleData.payment_unit_type == 0? _roleData.payment_value : ""}
                        onChange={(e) => handleSelectedChange(e, "payment_value")}
                        type="number"
                        style={{ paddingTop: 3 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    %
                                </InputAdornment>
                            )
                        }}
                        disabled={checkedAgent && _roleData.payment_unit_type == 0? false: true}
                    />
                </Grid>
                <Grid item xs={1} style={{ alignSelf: "center" }}>
                    OR
                </Grid>
                <Grid item xs={5} style={{ display: 'inherit' }}>
                    <Radio
                        checked={_roleData.payment_unit_type == 1}
                        onChange={(e) => handleSelectedChange(e, "payment_unit_type")}
                        value={1}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': 'B' }}
                        size="small"
                        disabled={!checkedAgent}
                    />
                    <TextField
                        size='small'
                        value={_roleData.payment_unit_type == 1? _roleData.payment_value : ""}
                        onChange={(e) => handleSelectedChange(e, "payment_value")}
                        type="number"
                        style={{ paddingTop: 3 }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            )
                        }}
                        disabled={ checkedAgent && _roleData.payment_unit_type == 1? false: true}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={1} style={{ paddingLeft: 10 }}>
                <Grid item xs={5} style={{ maxWidth: "max-content", alignSelf: "center", marginTop: 2 }}>
                    Calculated from:
                </Grid>
                <Grid item xs={7}>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={_roleData.payment_calculated_from}
                        onChange={(e) => handleSelectedChange(e, "payment_calculated_from")}
                    >
                        <FormControlLabel value={0} style={{ marginRight: 20 }} control={<Radio size='small' style={{ marginBottom: 3 }} disabled={!checkedAgent || _roleData.payment_unit_type == 1}/>} label="My GCI" />
                        <FormControlLabel value={1} style={{ marginRight: 0 }} control={<Radio size='small' style={{ marginBottom: 3 }} disabled={!checkedAgent || _roleData.payment_unit_type == 1}/>} label="My NET" />
                    </RadioGroup>
                </Grid>
            </Grid>
            <Box style={{ padding: 10, paddingTop: 0 }}>
                <label style={{ marginRight:"5px" }}>Notes:</label>
                <span style={{ color: "inherit", marginTop: 2 }}>{note}</span>
            </Box>
        </Box>
    )
}
export default PaidByCard;