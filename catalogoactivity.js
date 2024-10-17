package com.example.moviecatalog;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;

public class CatalogActivity extends AppCompatActivity {

    private ListView movieListView;
    private ArrayAdapter<String> adapter;
    private ArrayList<String> movieTitles;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_catalog);

        movieListView = findViewById(R.id.movieListView);
        movieTitles = new ArrayList<>(); // Load movie titles from database or API

        adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, movieTitles);
        movieListView.setAdapter(adapter);

        movieListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(CatalogActivity.this, MovieDetailActivity.class);
                intent.putExtra("MOVIE_TITLE", movieTitles.get(position));
                startActivity(intent);
            }
        });
    }
}
