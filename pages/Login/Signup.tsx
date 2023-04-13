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
import { useRouter } from "next/router";
import Link from "next/link";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = () => {
    // メール認証の処理をここに追加する
    console.log("Signup button clicked");
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
                textAlign: "center",
              }}
              variant="h5"
              component="h2"
            >
              新規登録
            </Typography>
            <TextField
              sx={{ mb: "10px" }}
              type="text"
              label="ユーザー名"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              sx={{ mb: "10px" }}
              type="email"
              label="メールアドレス"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              label="パスワード"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <VisibilityOffIcon
                    style={{ cursor: "pointer" }}
                    onClick={handlePasswordVisibility}
                  />
                ),
              }}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              label="パスワード確認"
              variant="outlined"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <VisibilityOffIcon
                    style={{ cursor: "pointer" }}
                    onClick={handlePasswordVisibility}
                  />
                ),
              }}
            />

            <Button
              sx={{
                mt: "20px",
                textAlign: "center",
                backgroundColor: "#a3c0cc",
                "&:hover": {
                  backgroundColor: "#cfe6e2",
                },
              }}
              variant="contained"
              fullWidth
              onClick={handleSignup}
            >
              新規登録
            </Button>
            <Typography
              sx={{ mt: "20px" }}
              variant="body2"
              color={grey[600]}
              align="center"
            >
              <Link href="/Login/Login">既にアカウントをお持ちですか？</Link>
            </Typography>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};

export default Signup;
