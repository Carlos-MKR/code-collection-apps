<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contacts/Index', [
            'contacts' => auth()->user()
                ->contacts()
                ->latest()
                ->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Contacts/Create', [
            'breadcrumbs' => [
                ['title' => 'Mis Contactos', 'href' => route('contacts.index')],
                ['title' => 'Nuevo Contacto']
            ]
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable|unique:contacts,phone',
            'image' => 'nullable|image|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('contacts', 'public');
        }

        $validated['user_id'] = Auth::id();

        Contact::create($validated);

        return redirect()->route('contacts.index')->with('success', 'Contacto creado correctamente.');
    }

    public function edit(Contact $contact)
    {

        return Inertia::render('Contacts/Edit', [
            'contact' => $contact
        ]);
    }

    public function update(Request $request, Contact $contact)
    {
        
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'nullable|unique:contacts,phone,' . $contact->id,
            'image' => 'nullable|image|max:3072'
        ]);

        unset($validated['image']);

        if ($request->hasFile('image')) {
            // Borrar la imagen vieja del disco si existe
            if ($contact->image) {
                Storage::disk('public')->delete($contact->image);
            }

            //Guardar la nueva imagen
            $validated['image'] = $request->file('image')->store('contacts', 'public');
        }

        $contact->update($validated);

        return redirect()->route('contacts.index')->with('success', 'Contacto actualizado correctamente.');
    }

    public function destroy(Contact $contact)
    {
        if ($contact->image) {
            Storage::disk('public')->delete($contact->image);
        }

        $contact->delete();

        return redirect()->route('contacts.index')->with('success', 'Contacto eliminado correctamente.');
    }
}
