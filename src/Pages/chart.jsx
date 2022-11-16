import { Box, MenuItem, Select, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { getChartData } from "../Store/ChartData";

const StyledBox = styled(Box)({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "15px"
});
export default function Chart() {
  const [tabId, setTabId] = useState("confirmed");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChartData());
  }, [dispatch]);
  const chartList = useSelector((state) => state.chartsData);

  return (
    <StyledBox>
      <Typography variant="h4" align="center" gutterBottom>
        Covid Data
      </Typography>

      <Select
        sx={{ width: "20vw", alignSelf: "center" }}
        value={tabId}
        onChange={(e) => setTabId(e.target.value)}
      >
        <MenuItem value="confirmed" selected>
          confirmed
        </MenuItem>
        <MenuItem value="deceased" selected>
          deceased
        </MenuItem>
        <MenuItem value="recovered" selected>
          recovered
        </MenuItem>
      </Select>
      <Box
        sx={{
          height: "50%",
          width: "90%",
          backgroundColor: "whiteSmoke",
          alignSelf: "center",
          borderRadius: "10px",
          marginTop: "20px"
        }}
      >
        <ResponsiveContainer>
          <BarChart data={chartList.chartsList}>
            <XAxis dataKey="stateCode" />
            <YAxis />
            <Bar dataKey={tabId || 0} fill="#ff8080" barSize={100} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </StyledBox>
  );
}
