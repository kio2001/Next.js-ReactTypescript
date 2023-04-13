import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ForgetPassword from "./Forget";
import { useRouter } from "next/router";
import Link from "next/link";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  return (
    <>
      <Box sx={{ backgroundColor: "#e6f7ff", width: "100%", height: "1000px" }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Paper
            elevation={5}
            sx={{
              p: 5,
              height: "100%",
              width: "280px",
              margin: "70px auto",
            }}
          >
            <Avatar
              sx={{
                mb: "30px",
                mr: "auto",
                ml: "auto",
                bgcolor: "#a3c0cc",
              }}
            >
              <LockIcon />
            </Avatar>
            <Typography
              sx={{
                mb: "20px",
                pl: "106px",
              }}
              variant="h5"
              component="h2"
            >
              Log In
            </Typography>

            <TextField
              sx={{ mb: "10px" }}
              type="username"
              label="username"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="outlined"
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <VisibilityOffIcon
                    style={{ cursor: "pointer" }}
                    onClick={handlePasswordVisibility}
                  />
                ),
              }}
            />
            <Grid item xs={8}>
              <Button
                sx={{
                  m: "20px auto",
                  backgroundColor: "#a3c0cc",
                  "&:hover": {
                    backgroundColor: "#cfe6e2",
                  },
                }}
                variant="contained"
                href="#contained-buttons"
              >
                ログイン
              </Button>
            </Grid>
            <Grid sx={{ textAlign: "right" }}>
              <p>
                <Link href="/Login/Forget">パスワードを忘れた場合</Link>
              </p>
              <p>
                <Link href="/Login/Signup">新規登録</Link>
              </p>
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
