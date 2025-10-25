import { Card, CardContent, Stack, Typography } from "@mui/material";

export default function CardShow({ arr }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={3}
      flexWrap="wrap"
      justifyContent="center"
      sx={{ mt: 4 }}
    >
      {arr.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: 280,
            borderRadius: 2,
            boxShadow: 3,
            transition: "0.3s",
            "&:hover": { boxShadow: 6 },
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6" fontWeight="bold">
              {card.name || "No name"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Age: {card.age || "N/A"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hobby: {card.hobby || "None"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
} 