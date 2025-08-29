# BFHL Data Processing API

A Node.js/Express.js API that processes data arrays and categorizes elements into different types.

## Features

- Categorizes data into even numbers, odd numbers, alphabets, and special characters
- Calculates sum of all numeric values
- Creates alternating case concatenated string from alphabets
- Input validation and error handling

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

The server will run on port 3000 by default.

## API Endpoints

### GET /
Returns API information and status.

### POST /bfhl
Processes a data array and returns categorized results.

**Request Body:**
```json
{
  "data": ["A", "1", "B", "2", "C", "3", "@", "#"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "3"],
  "even_numbers": ["2"],
  "alphabets": ["A", "B", "C"],
  "special_characters": ["@", "#"],
  "sum": "6",
  "concat_string": "CbA"
}
```

## Data Processing Rules

1. **Numbers**: Categorized as even or odd, included in sum calculation
2. **Alphabets**: Converted to uppercase, used for concatenated string
3. **Special Characters**: Any non-alphanumeric characters
4. **Concatenated String**: Reversed alphabets with alternating case (starting uppercase)

## Testing

You can test the API using tools like:
- Postman
- cURL
- Thunder Client (VS Code extension)

Example cURL request:
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["A", "1", "B", "2", "C", "3", "@", "#"]}'
```

## Customization

Update the following fields in `server.js` with your information:
- `user_id`: Your name and date of birth
- `email`: Your email address
- `roll_number`: Your roll number
