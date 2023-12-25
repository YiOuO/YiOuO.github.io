#!/bin/bash

# Combine the files into publications.bib
{
    echo "%------------------------------------------"
    echo "%------------- Conferences ----------------"
    echo "%------------------------------------------"
    cat conferences.bib

    echo "%------------------------------------------"
    echo "%--------------- Journals -----------------"
    echo "%------------------------------------------"
    cat journals.bib

    echo "%------------------------------------------"
    echo "%------------ Presentations ---------------"
    echo "%------------------------------------------"
    cat presentations.bib
} > publications.bib
