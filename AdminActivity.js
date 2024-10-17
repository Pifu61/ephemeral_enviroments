package com.example.moviecatalog;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import androidx.appcompat.app.AppCompatActivity;

public class AdminActivity extends AppCompatActivity {

    private EditText titleEditText, yearEditText, directorEditText, genreEditText, synopsisEditText, imageEditText;
    private Button addMovieButton, removeMovieButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin);

        titleEditText = findViewById(R.id.adminTitleEditText);
        yearEditText = findViewById(R.id.adminYearEditText);
        directorEditText = findViewById(R.id.adminDirectorEditText);
        genreEditText = findViewById(R.id.adminGenreEditText);
        synopsisEditText = findViewById(R.id.adminSynopsisEditText);
        imageEditText = findViewById(R.id.adminImageEditText);

        addMovieButton = findViewById(R.id.addMovieButton);
        removeMovieButton = findViewById(R.id.removeMovieButton);

        addMovieButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Add movie to database
                String title = titleEditText.getText().toString();
                String year = yearEditText.getText().toString();
                String director = directorEditText.getText().toString();
                String genre = genreEditText.getText().toString();
                String synopsis = synopsisEditText.getText().toString();
                String imageUrl = imageEditText.getText().toString();
                
                // Implement the logic to add movie to the database
            }
        });

        removeMovieButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // Remove movie from database
                String title = titleEditText.getText().toString();
                
                // Implement the logic to remove movie from the database
            }
        });
    }
}
