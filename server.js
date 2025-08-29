const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Helper function to check if a string is a number
function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

// Helper function to check if a string contains only letters
function isAlphabet(str) {
  return /^[A-Za-z]+$/.test(str);
}

// Helper function to process the concatenation of alphabets
function processConcatString(alphabets) {
  // Reverse the array of alphabets and join into a single string
  const reversed = alphabets.reverse().join('');
  
  // Convert to alternating case (starting with uppercase)
  let result = '';
  for (let i = 0; i < reversed.length; i++) {
    if (i % 2 === 0) {
      result += reversed[i].toUpperCase();
    } else {
      result += reversed[i].toLowerCase();
    }
  }
  return result;
}

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Data must be an array"
      });
    }

    const evenNumbers = [];
    const oddNumbers = [];
    const alphabets = [];
    const specialChars = [];
    let sum = 0;

    // Process each element in the data array
    data.forEach(item => {
      const str = String(item);
      
      if (isNumber(str)) {
        const num = parseFloat(str);
        sum += num;
        
        if (num % 2 === 0) {
          evenNumbers.push(str);
        } else {
          oddNumbers.push(str);
        }
      } else if (isAlphabet(str)) {
        alphabets.push(str.toUpperCase());
      } else {
        specialChars.push(str);
      }
    });

    // Prepare response
    const response = {
      is_success: true,
      user_id: "dola_chandrasekhar_04122004", // Replace with your actual name and DOB
      email: "chandrasekhar65014@gmail.com", // Replace with your actual email
      roll_number: "22BCE20138", // Replace with your actual roll number
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: processConcatString([...alphabets.map(a => a.toLowerCase())])
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: "Internal server error"
    });
  }
});

// Add a simple GET endpoint for testing
app.get('/', (req, res) => {
  res.json({
    message: "BFHL API is running",
    endpoint: "/bfhl",
    method: "POST",
    description: "Send a POST request with data array to process"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
