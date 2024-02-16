<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the selected checkboxes
    $selectedPlaces = $_POST['place'];

    // Prepare the email message
    $to = "jamesivangabarda8@email.com"; // Change this to your email address
    $subject = "Selected Places";
    $message = "Selected Places:\n";
    foreach ($selectedPlaces as $place) {
        $message .= "- $place\n";
    }

    // Send the email
    if (mail($to, $subject, $message)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    // Redirect back to the HTML page if accessed directly
    header("Location: home.html");
    exit;
}
?>
