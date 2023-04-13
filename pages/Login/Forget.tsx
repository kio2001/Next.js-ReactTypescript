import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import LockIcon from "@mui/icons-material/Lock";

const ForgetPass = () => {
  return (
    <>
      {/* Forgot Password UI */}
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
                pl: "28px",
              }}
              variant="h5"
              component="h2"
            >
              パスワードを忘れた場合
            </Typography>
            <Typography sx={{ mb: "20px" }}>
              ご登録のメールアドレスを入力してください。パスワードの再設定方法をお送りします。
            </Typography>
            <TextField
              sx={{ mb: "10px" }}
              type="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
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
                送信
              </Button>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Link
                href="/Login/Login"
                variant="body2"
                onClick={() => window.history.back()}
              >
                ログイン画面に戻る
              </Link>
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};

export default ForgetPass;
